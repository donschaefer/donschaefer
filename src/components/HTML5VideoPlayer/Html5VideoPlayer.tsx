/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef, useState } from 'react';
import videojs from "video.js";
type VideoJsPlayer = ReturnType<typeof videojs>;
import 'video.js/dist/video-js.css';
import './html5VideoPlayer.css';

enum VideoType {
	HTML5 = `HTML5`,
	YouTube = `YouTube`,
	Vimeo = `Vimeo`
}
export interface IHtml5VideoPlayerProps {
	title: string;
	paths: string[];
	height?: string;
	width?: string;
	thumbnail?: string;
	vttCaptions?: string;
	videoType?: VideoType;
}

const isHostMatch = (url: string, domain: string): boolean => {
	try {
		const { hostname } = new URL(url);
		return hostname === domain || hostname.endsWith(`.${domain}`);
	} catch {
		return false;
	}
};

const Html5VideoPlayer = ({ title, paths, thumbnail, vttCaptions, height, width }: IHtml5VideoPlayerProps) => {			
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const playerRef = useRef<VideoJsPlayer | null>(null);
	const getVideoType = (): VideoType => {
		if (isHostMatch(paths[0], `youtube.com`)) {
			return VideoType.YouTube;
		} else if (isHostMatch(paths[0], `vimeo.com`)) {
			return VideoType.Vimeo;
		}
		return VideoType.HTML5;
	};
	const [videoType] = useState(getVideoType());

	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = videoRef.current;	  
			const options = {};
			if (!videoElement) return;

			playerRef.current = videojs(videoElement, options, () => {
				videojs.log(`player is ready`);
			});		
		}		
	}, [playerRef]);

	useEffect(() => {
		const player = playerRef.current;	
		
		return () => {
			if (player) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	const sources = Array.from(new Set(paths)).map(path => {
		const extensionIndex = path.lastIndexOf(`.`);
		const file = path.slice(0, extensionIndex);
		const extension = path.slice(extensionIndex + 1);
		let fileType = `video/${extension}`;
		switch (extension) {
		case `mp4`:
		case `ogv`:
		case `webm`:
			// Do nothing
			break;
		default:
			fileType = `application/x-mpegURL`;
		}
		return <source key={path} src={`${file}.${extension}`} type={fileType} />;
	});

	switch (videoType) {
	case VideoType.YouTube:
		return (
			<div style={{ width: 620, height: 480}}> 
				<iframe 
					src={paths[0]}
					title={title} 
					frameBorder={0}
					width={620} 
					height={480}
					allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`}
					allowFullScreen
				></iframe>
			</div>
		);
	case VideoType.Vimeo:
		return (
			<div style={{ width: 620, height: 480}}>
				<iframe 
					title={title}
					src={paths[0]} 
					width={620} 
					height={480}
					frameBorder={0}
					allow={`autoplay; fullscreen; picture-in-picture`}
					allowFullScreen
				></iframe>
			</div>							
		);
	default:
		return (
			<video
				ref={videoRef}
				id="my-video"
				className="video-js vjs-custom"
				controls
				preload="auto"
				height={height}
				width={width}
				poster={thumbnail}
				data-setup="{}"
			>
				{sources}
				<track src={vttCaptions} kind="descriptions" srcLang="en" label="English"></track>
				<p className="vjs-no-js">
						To view this video please enable JavaScript, and consider upgrading to a
						web browser that
					<a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">
							supports HTML5 video
					</a>
				</p>
			</video>
		);
	}	
};

export default Html5VideoPlayer;