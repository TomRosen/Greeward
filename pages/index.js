import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Leaderboard from "@/components/Leaderboard";
import ProductHighlightList from "@/components/ProductHighlightList";
import { useQueryClient } from 'react-query';

export default function Home() {
  return (
    <div>
      <ProductHighlightList></ProductHighlightList>
      <Leaderboard></Leaderboard>
    </div>
  );
}
