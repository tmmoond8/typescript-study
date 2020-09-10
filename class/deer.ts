namespace Deer {
  namespace Chess {
    type Color = "Black" | "White";
    type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
    type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    class Position {
      constructor(public file: File, public rank: Rank) {}
    }

    // class Position {
    //   file: File;
    //   rank: Rank;
    //   constructor(file: File, rank: Rank) {
    //     this.file = file;
    //     this.rank = rank;
    //   }
    // }

    abstract class Piece {
      protected position: Position;
      constructor(private readonly color: Color, file: File, rank: Rank) {
        this.position = new Position(file, rank);
      }

      moveTo(position: Position) {
        if (this.canMoveTo(position)) {
          this.position = position;
        }
      }

      abstract canMoveTo(position: Position): boolean;
    }

    class King extends Piece {
      canMoveTo(position: Position) {
        return (
          this.position.file === position.file &&
          Math.abs(this.position.rank - position.rank) < 3
        );
      }
    }
  }

  class List {
    total: number = 0;
    add(value: number): this {
      this.total += value;
      return this;
    }
  }
  new List().add(1).add(2).total;
}
