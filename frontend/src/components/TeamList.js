import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';
import TeamItem from './TeamItem';
import TeamItemSkeleton from './TeamItemSkeleton';

function TeamList() {
    const {teams} = useSelector(state => state.teams);
    const dispatch = useDispatch();

    useEffect(() => {
        if (teams.length === 0) {
            dispatch(actions.teams.fetchTeams());
        }
    }, [dispatch, teams]);

    return (
        <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
                id="teams-headline">
                Teams
            </h3>
            <div className="mt-1" role="group" aria-labelledby="teams-headline">
                {teams.length > 0
                    ? teams.map(team => {
                        return (
                            <TeamItem
                                key={team._id}
                                team={team}
                            />
                        )
                    })
                    :
                    <>
                        <TeamItemSkeleton/>
                        <TeamItemSkeleton/>
                        <TeamItemSkeleton/>
                    </>
                }
            </div>
        </div>
    )
}

export default TeamList;