import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    // Layoutの中に記述したものはLayout側でchildrenとして読み込むように処理
    <Layout title="Home">
      <p className="text-4xl">Welcome to Nextjs</p>
    </Layout>
  );
}
