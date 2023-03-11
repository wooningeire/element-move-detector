const rootContainer = document.querySelector(".intersection-roots");

const onPositionChange = element => {

	const rect = element.getBoundingClientRect();

	const intersector = document.createElement("div");
	intersector.style.cssText = `
position: absolute;
left: ${rect.left}px;
top: ${rect.top}px;
width: ${rect.width}px;
height: ${rect.height}px;
`;
	rootContainer.append(intersector);

	intersector.append(element);

	const observer = new IntersectionObserver(entries => {
		console.log(entries);
		
		entries.forEach(entry => {
			
		});
	}, {
		root: intersector,
		threshold: 1,
	});

	observer.observe(element);
};

onPositionChange(document.querySelector(".target"));