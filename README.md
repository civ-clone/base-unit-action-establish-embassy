# base-unit-action-establish-embassy

The `EstablishEmbassy` unit action, and the `Embassy` interaction that records one. See civ-clone/web-renderer#58.

## The agent survives, or not

Before the mission the Diplomat must survive a caught check (base-unit-agent's `AgentSurvives` with `CAUGHT_CHECK`): one
that is caught is destroyed, after the `Moved` rules, and the mission doesn't happen. Once the mission is done, the
Diplomat is used up unless it survives an `ORDINARY` check. With no `AgentSurvives` rules the check passes and the
Diplomat is used up, as before.
