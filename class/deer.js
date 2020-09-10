"use strict";
var Deer;
(function (Deer) {
    let Chess;
    (function (Chess) {
        class Position {
            constructor(file, rank) {
                this.file = file;
                this.rank = rank;
            }
        }
        // class Position {
        //   file: File;
        //   rank: Rank;
        //   constructor(file: File, rank: Rank) {
        //     this.file = file;
        //     this.rank = rank;
        //   }
        // }
        class Piece {
            constructor(color, file, rank) {
                this.color = color;
                this.position = new Position(file, rank);
            }
            moveTo(position) {
                if (this.canMoveTo(position)) {
                    this.position = position;
                }
            }
        }
        class King extends Piece {
            canMoveTo(position) {
                return (this.position.file === position.file &&
                    Math.abs(this.position.rank - position.rank) < 3);
            }
        }
    })(Chess || (Chess = {}));
    class List {
        constructor() {
            this.total = 0;
        }
        add(value) {
            this.total += value;
            return this;
        }
    }
    new List().add(1).add(2).total;
})(Deer || (Deer = {}));
