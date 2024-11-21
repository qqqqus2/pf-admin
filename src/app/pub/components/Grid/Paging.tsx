import React from "react";
import IcPrev from "@/assets/icons/ico_paging_prev.svg";
import IcNext from "@/assets/icons/ico_paging_next.svg";

export interface PagingProps {
	className?: string;
}

export default function Paging({
	className
}: PagingProps) {
	return (
		<ul className={`paging ${className ? className : ''}`}>
			<li><button className="btn-paging" disabled><IcPrev /></button></li>
			<li><button className="current">1</button></li>
			<li><button>2</button></li>
			<li><button>3</button></li>
			<li><button>4</button></li>
			<li><button>5</button></li>
			<li><button>...</button></li>
			<li><button>10</button></li>
			<li><button className="btn-paging"><IcNext /></button></li>
		</ul>
	);
}