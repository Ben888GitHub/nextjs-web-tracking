import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
	const { data } = await axios.get('https://ipapi.co/json/');

	console.log(data);

	return {
		props: { data }
	};
};

export default function Home({ data }) {
	console.log(data);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>NextJs Web Tracking</h1>
				<h2>your IP Address: {data.ip}</h2>
				<h2>your Country: {data.country_name}</h2>
				<h2>your City: {data.city}</h2>
				<h2>your Region: {data.region}</h2>
				<h2>your ISP: {data.org}</h2>
			</main>
		</div>
	);
}
