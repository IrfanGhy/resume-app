"use client";
import React, { useState } from "react";

const Skills = ({ data }) => {
	const [activeTab, setActiveTab] = useState("frontend");

	const setBg = (active) => (activeTab === active ? "bg-red" : "bg-grey");
	const setTabsAlignment = (tab) =>
		tab === "frontend" ? "text-left" : "text-right";

	const tabs = (
		<div className='flex'>
			{["frontend", "backend"].map((el) => (
				<button
					key={el}
					type='button'
					className={`btn ${setBg(el)} ${setTabsAlignment(el)}`}
					onClick={() => setActiveTab(el)}
				>
					{el}
				</button>
			))}
		</div>
	);
	const content = (
		<ul
			className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
				activeTab === "soft" ? "justify-start" : "justify-start"
			}`}
		>
			{data[activeTab].map(({ icon, text }) => (
				<li key={text} className='skill justify-center'>
					<span> {icon}</span> {text}
				</li>
			))}
		</ul>
	);
	return (
		<div>
			{tabs}
			{content}
		</div>
	);
};

export default Skills;
