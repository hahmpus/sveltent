export default function portal(node:any) {
	document.querySelector('main')?.appendChild(node).focus();
};