import { Component } from '@angular/core';

@Component({
    selector: 'combination-lock',
    templateUrl: './combination.component.html',
    styleUrls: ['./combination.component.css']
})
export class CombinationComponent {
    public myArray = ["A", "B", "C", "D", "E"];
    public currWords = [0, 0, 0, 0, 0];
    public correctCombination = [3, 0, 1, 3, 0];
    public isCombinationCorrect = false;

    rotate(id: number): void {
        this.currWords[id] = (this.currWords[id] + 1) % this.myArray.length;
        this.checkCombination();
    }

    checkCombination(): void {
        const combination = this.currWords;
        for (let i = 0; i < this.correctCombination.length; i++) {
            if (combination[i] !== this.correctCombination[i]) {
                this.isCombinationCorrect = false;
                return;
            }
        }
        this.isCombinationCorrect = true;
    }

    exit() {
        location.reload();
    }

}