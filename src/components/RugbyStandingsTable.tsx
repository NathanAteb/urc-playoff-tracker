
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
} from "@/components/ui/table";
import { defaultTeamStats } from '@/data/rugby/defaultStats';
import RugbyTableHeader from './RugbyTableHeader';
import RugbyTableTitle from './RugbyTableTitle';
import TeamRow from './TeamRow';
import { Team } from '@/types/rugby';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { getLockedFixtures, setLockedFixtures as persistLockedFixtures, getTeamOrder, setTeamOrder as persistTeamOrder, getTeamState, clearSavedState } from '@/store/teamStatsStore';

const RugbyStandingsTable = () => {
  const [teams, setTeams] = useState<Team[]>(() => {
    const savedOrder = getTeamOrder();
    const allTeams = defaultTeamStats.map(team => ({
      ...team,
      originalPosition: team.position
    }));

    if (savedOrder.length > 0) {
      // Restore saved order and apply saved stats
      const teamMap = new Map(allTeams.map(t => [t.name, t]));
      const ordered: Team[] = [];
      savedOrder.forEach((name, index) => {
        const team = teamMap.get(name);
        if (team) {
          const saved = getTeamState(name);
          ordered.push({
            ...team,
            position: index + 1,
            ...(saved ? {
              won: saved.stats.won,
              drawn: saved.stats.drawn,
              lost: saved.stats.lost,
              bPoints: saved.stats.bPoints,
              points: saved.stats.points,
            } : {})
          });
        }
      });
      // Add any teams not in saved order (safety net)
      allTeams.forEach(team => {
        if (!savedOrder.includes(team.name)) {
          ordered.push(team);
        }
      });
      return ordered;
    }

    return allTeams;
  });

  const [lockedFixtures, setLockedFixtures] = useState<boolean[]>(() => getLockedFixtures());

  // Always show movement indicators
  const [isInitialRender, setIsInitialRender] = useState(false);

  // Persist team order whenever it changes
  useEffect(() => {
    persistTeamOrder(teams.map(t => t.name));
  }, [teams]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTeams((items) => {
        const oldIndex = items.findIndex(item => item.name === active.id);
        const newIndex = items.findIndex(item => item.name === over.id);

        if (oldIndex === -1 || newIndex === -1) return items;

        const newItems = arrayMove(items, oldIndex, newIndex);

        return newItems.map((team, index) => ({
          ...team,
          position: index + 1,
          // Preserve the original position for movement indicators
          originalPosition: team.originalPosition
        }));
      });
    }
  };

  const handleTeamUpdate = (updatedTeam: Team) => {
    setTeams(currentTeams => {
      return currentTeams.map(team => {
        if (team.name === updatedTeam.name) {
          return {
            ...team,
            won: updatedTeam.won,
            drawn: updatedTeam.drawn,
            lost: updatedTeam.lost,
            bPoints: updatedTeam.bPoints,
            points: updatedTeam.points
          };
        }
        return team;
      });
    });
  };

  const handleFixtureLockChange = (index: number, isLocked: boolean) => {
    setLockedFixtures(prevLocks => {
      const newLocks = [...prevLocks];
      newLocks[index] = isLocked;
      persistLockedFixtures(newLocks);
      return newLocks;
    });
  };

  const handleReset = () => {
    clearSavedState();
    window.location.reload();
  };

  return (
    <div className="w-full min-w-0 max-w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center mb-4">
        <RugbyTableTitle />
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Reset All
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-2 sm:hidden" aria-hidden>
        Swipe horizontally to see all columns
      </p>
      <div className="overflow-x-auto overscroll-x-contain touch-pan-x [-webkit-overflow-scrolling:touch] rounded-lg">
        <div id="rugby-standings-table" className="print:scale-100 break-inside-avoid page-break-inside-avoid bg-white p-2 sm:p-4 rounded-lg shadow-sm min-w-min">
        <Table className="w-full min-w-[1024px] table-fixed break-inside-avoid border-collapse">
          <RugbyTableHeader
            lockedFixtures={lockedFixtures}
            onFixtureLockChange={handleFixtureLockChange}
          />
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis]}
          >
            <TableBody>
              <SortableContext
                items={teams.map(team => team.name)}
                strategy={verticalListSortingStrategy}
              >
                {teams.map((team) => (
                  <TeamRow
                    key={`team-${team.name}`}
                    team={team}
                    showMovementIndicator={true}
                    onTeamUpdate={handleTeamUpdate}
                    lockedFixtures={lockedFixtures}
                  />
                ))}
              </SortableContext>
            </TableBody>
          </DndContext>
        </Table>
        </div>
      </div>
    </div>
  );
};

export default RugbyStandingsTable;
