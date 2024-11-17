---

### 1. Initial Position

AntLion and Ant are initialized with random positions in a solution space that has been defined (in this case, two-dimensional with a range between min and max). Each AntLion and Ant calculates their fitness values based on their initial positions, using an objective function (e.g., Rosenbrock function).

### 2. Iteration Steps

In each iteration, Ant and AntLion move according to certain rules. Below is the sequence of their movements:

#### Step 1: Update Fitness and Position
- AntLion calculates its fitness based on its current position.
- Ant also calculates its fitness based on its current position.

#### Step 2: Ant Movement
- The Ant moves first, avoiding the AntLion.
- Each Ant selects the best AntLion (the one with the best fitness, i.e., the lowest fitness) and moves away from its position.
- The Ant's movement is controlled by the beta parameter, which determines how far the Ant will move away from the AntLion's position.

#### Step 3: AntLion Movement
- After the Ant moves, it is the AntLion’s turn to move.
- AntLion moves towards the best Ant's position. Each AntLion selects the best Ant based on its fitness (lowest fitness).
- AntLion’s movement is controlled by the alpha parameter, which regulates the speed of the AntLion's movement towards the best Ant.

#### Step 4: Best Position Update
- After the Ant and AntLion move, the best position of the entire AntLion population is updated.
- Gbest (global best) is calculated as the best position found by all the AntLions, and the best fitness (Gbest Fitness) is also updated if there is an AntLion with better fitness than before.

#### Step 5: Repetition
- This process is repeated for a specified number of iterations, such as 100 iterations, or until the algorithm finds a sufficiently good solution (with low enough fitness).

### 3. Movement Sequence:
- The Ant moves first, away from the AntLion.
- Then, the AntLion moves towards the best Ant.
- During the next iterations, this process repeats, with the Ant moving away first, followed by the AntLion moving towards the best Ant.

### Summary:
- The Ant moves first, away from the AntLion.
- After that, the AntLion moves towards the best Ant.
- The best position and fitness are updated after each step.

---

### ALO Analogy:

#### Customer (Ant):
The customer is searching for the optimal parking spot (for example, the parking spot closest to the entrance or the best available position). The customer moves away from the parking attendant if they are too close to the attendant, with the goal of exploring more parking spots.

#### Parking Attendant (AntLion):
The parking attendant has information about the best parking spots (i.e., the spot with the best position, in this case, the optimal parking spot). The attendant tries to direct the customer to the optimal parking spot and moves towards the customer who has the best position, to improve the parking spot.

### How it Works:

#### Customer and Parking Attendant Spawn at Random Positions:
- The customer (Ant) and the parking attendant (AntLion) start at random positions in the parking area.

#### Customer Moves Away from the Attendant:
- The customer moves away from the parking attendant’s position (AntLion) to explore more potentially better parking spots.
- The customer who moves toward a better spot will find the optimal position faster. The closer the customer gets to the optimal position, the smaller their movement distance will be.

#### Parking Attendant Moves Towards the Best Customer:
- The parking attendant (AntLion) moves toward the best customer (Ant) who has found a better spot. The attendant tries to help the customer by directing them to the best parking spot that the customer has found.

#### Optimal Position:
- After several iterations, the customer and the attendant work together, with the customer moving away from the attendant to explore and the attendant moving toward the best customer to help them reach the optimal position.

#### Best Position:
- If there is a parking attendant with the best position (best fitness) found during the iteration, that attendant will continue directing the customer to the best position found in the parking area.

### Process Sequence:
1. The customer moves first to find a better parking spot (avoiding the parking attendant if they are too close).
2. The parking attendant then moves towards the best customer to improve their parking position.

### Conclusion:
In this analogy:
- The customer (Ant) explores the parking spots and moves away from the parking attendant (AntLion).
- The parking attendant (AntLion) moves towards the best customer (who has found the optimal parking spot), and they work together to reach the best parking position.

---

- **constructor** = initialization of ant and antlion parameters
- **init_population** = initializing the population
- **evaluateFitness** = evaluating the optimal positions of ants and antlions
- **updateElite** = updating the optimal position of the antlions
- **randomWalk** = providing variation in movement and determining random movement for ants within the boundaries, i.e., minBoundary and maxBoundary
- **updateAntPositions** = updating the positions of ants based on antlion positions and random movement
- **updateAntLions** = updating the positions of antlions based on ant positions and random movement
- **mainALO** = running the Ant Lion Optimizer (ALO) program

---
