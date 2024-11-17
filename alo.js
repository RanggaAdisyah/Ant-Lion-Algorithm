class ALO {
    constructor(n_Ants, n_Dimensi, obj_Function, maxIter = 50) {
        this.n_Ants = n_Ants;
        this.n_Dimensi = n_Dimensi;
        this.obj_Function = obj_Function;
        this.maxIter = maxIter;

        this.ants = []; // Posisi semut
        this.antLions = []; // Posisi singa semut
        this.antsFitness = [];
        this.antLionsFitness = [];
        this.elitePosition = [];
        this.eliteFitness = -Infinity;

        this.minBoundary = 0; // Batas bawah
        this.maxBoundary = 30; // Batas atas

        this.init_population();
    }

    init_population() {
        for (let i = 0; i < this.n_Ants; i++) {
            const ant = Array.from({ length: this.n_Dimensi }, () =>
                Math.random() * (this.maxBoundary - this.minBoundary) + this.minBoundary
            );
            const antLion = [...ant]; // Sama saat inisialisasi awal
            this.ants.push(ant);
            this.antLions.push(antLion);
        }
        this.evaluateFitness();
    }

    evaluateFitness() {
        this.antsFitness = this.ants.map((ant) => this.obj_Function(...ant));
        this.antLionsFitness = this.antLions.map((antLion) => this.obj_Function(...antLion));
        this.updateElite();
    }

    updateElite() {
        const maxFitness = Math.max(...this.antLionsFitness);
        const bestIndex = this.antLionsFitness.indexOf(maxFitness);
        if (maxFitness > this.eliteFitness) {
            this.eliteFitness = maxFitness;
            this.elitePosition = [...this.antLions[bestIndex]];
        }
    }

    randomWalk(ant, iter) {
        const randomStep = () => {
            let step = 0;
            for (let i = 0; i < iter; i++) {
                step += Math.random() < 0.5 ? -1 : 1;
            }
            return step / iter;
        };

        return ant.map((x) =>
            Math.min(
                this.maxBoundary,
                Math.max(this.minBoundary, x + randomStep() * (this.maxBoundary - this.minBoundary))
            )
        );
    }

    updateAntPositions(iter) {
        const ratio = iter / this.maxIter;
        const shrinkFactor = this.maxBoundary - ratio * (this.maxBoundary - this.minBoundary);

        this.ants = this.ants.map((ant, index) => {
            const antLion = this.antLions[index];
            const randomWalkPosition = this.randomWalk(ant, iter);

            return randomWalkPosition.map((x, i) =>
                Math.random() * (antLion[i] - shrinkFactor) + shrinkFactor
            );
        });
    }

    updateAntLions() {
        this.ants.forEach((ant, index) => {
            if (this.antsFitness[index] > this.antLionsFitness[index]) {
                this.antLions[index] = [...ant];
                this.antLionsFitness[index] = this.antsFitness[index];
            }
        });
    }

    mainALO() {
        for (let iter = 1; iter <= this.maxIter; iter++) {
            this.updateAntPositions(iter);
            this.evaluateFitness();
            this.updateAntLions();
        }
    }
}

export { ALO };
