## Gameplay systems

I built the core gameplay loop in Unity, including card stack interaction,
spline-based conveyor movement, container matching, deck overflow failure, and
win/loss state handling.

## Coordinating gameplay and animation

A key challenge was coordinating asynchronous card animations with gameplay
state. Cards needed to transition safely between stacks, conveyor lanes,
containers, and the deck without race conditions.

## Designer-friendly configuration

Color-coded ScriptableObject configurations and data-driven lane and container
setup made it easier to tune and extend the prototype.

## Responsive feedback

Staggered card motion and animated UI feedback help communicate successful
sorting, level completion, and failure states.
