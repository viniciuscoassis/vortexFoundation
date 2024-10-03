import {ColumnDef} from "@tanstack/react-table"
type Leaderboard = {
    id: number;
    address: string;
    amount: number;
    rank: string;
  }
export const columns: ColumnDef<Leaderboard>[] = [
    {
        accessorKey: "id",
        header: "Position",
    },
    {
        accessorKey: "address", 
        header: "Address",
    },
    {
        accessorKey: "amount",
        header: "Amount 🔥(TEX)",
    },
    {
        accessorKey: "rank",
        header: "Rank",
    },
];