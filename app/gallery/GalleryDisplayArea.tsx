import React from "react";
import classes from "./galleryDisplayArea.module.scss";
import Heading from "@components/typography/Heading";

interface GalleryDisplayAreaProps {
	title: string;
	children?: React.ReactNode;
}

const GalleryDisplayArea: React.FC<GalleryDisplayAreaProps> = ({ children, title }) => {
	return (
		<section className={classes.galleryDisplayArea}>
			<Heading level='h2'>{title}</Heading>
			{children}
		</section>
	);
};

export default GalleryDisplayArea;
