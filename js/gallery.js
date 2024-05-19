const imagesArray = [
	{
		preview: 'https://media.istockphoto.com/id/1455779066/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D1%96-%D1%96-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D1%96-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D1%89%D0%BE-%D1%81%D1%82%D0%BE%D1%8F%D1%82%D1%8C-%D0%B2%D1%96%D1%87-%D0%BD%D0%B0-%D0%B2%D1%96%D1%87.jpg?s=1024x1024&w=is&k=20&c=3n5Jrf9sdMkars9XtVfpAbQPObmopQX0pZmXrKg-oy8=',
		original: 'https://media.istockphoto.com/id/1455779066/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D1%96-%D1%96-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D1%96-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D1%89%D0%BE-%D1%81%D1%82%D0%BE%D1%8F%D1%82%D1%8C-%D0%B2%D1%96%D1%87-%D0%BD%D0%B0-%D0%B2%D1%96%D1%87.jpg?s=2048x2048&w=is&k=20&c=nqPMRvZ-HtkYJr9T4shEK3Fgr8kiC09BP2X8fs0lcAw=',
		description: 'Two dogs of different sizes staring at each other'
	},
	{
		preview: 'https://media.istockphoto.com/id/1302936684/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BF%D1%96%D0%BA%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8-%D0%BB%D1%96%D0%BD%D1%96%D0%B9%D0%BD%D0%B8%D1%85-%D0%BC%D0%BE%D0%BD%D0%B5%D1%82.jpg?s=1024x1024&w=is&k=20&c=jlhi1LN-itarnk2k98bw1oCxHAYzneRgD37cd7kCjIA=',
		original: 'https://media.istockphoto.com/id/1302936684/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%BF%D1%96%D0%BA%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8-%D0%BB%D1%96%D0%BD%D1%96%D0%B9%D0%BD%D0%B8%D1%85-%D0%BC%D0%BE%D0%BD%D0%B5%D1%82.jpg?s=2048x2048&w=is&k=20&c=kOKucKziIIFUX3LIPBth9XnnGsra1M6qEeJ71g4kEIY=',
		description: 'Pictograms of linear coins'
	},
	{
		preview: 'https://media.istockphoto.com/id/1199391766/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9-%D1%81%D0%B0%D0%B4%D0%B6%D0%B0%D0%BD%D0%B5%D1%86%D1%8C-%D1%89%D0%BE-%D1%80%D0%BE%D1%81%D1%82%D0%B5-%D0%BD%D0%B0-%D1%82%D1%80%D0%BE%D1%82%D1%83%D0%B0%D1%80%D1%96-%D0%B7-%D1%82%D1%96%D0%BD%D0%BD%D1%8E-%D0%BF%D0%BE%D0%B2%D0%BD%D0%BE%D1%86%D1%96%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F-%D0%BD%D0%B0%D0%B4%D1%96%D1%97.jpg?s=1024x1024&w=is&k=20&c=y_jFEfE2Tnb6zVL1L9Zsz9KnTuosIkfLpIrWKOzOZwk=',
		original: 'https://media.istockphoto.com/id/1199391766/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9-%D1%81%D0%B0%D0%B4%D0%B6%D0%B0%D0%BD%D0%B5%D1%86%D1%8C-%D1%89%D0%BE-%D1%80%D0%BE%D1%81%D1%82%D0%B5-%D0%BD%D0%B0-%D1%82%D1%80%D0%BE%D1%82%D1%83%D0%B0%D1%80%D1%96-%D0%B7-%D1%82%D1%96%D0%BD%D0%BD%D1%8E-%D0%BF%D0%BE%D0%B2%D0%BD%D0%BE%D1%86%D1%96%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%B0-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F-%D0%BD%D0%B0%D0%B4%D1%96%D1%97.jpg?s=2048x2048&w=is&k=20&c=Ch3MhrBpD0yiZYU5wxxwBQJ_3VL8xDDK3X7XgtxGY6s=',
		description: 'The plant and its shadow on the sidewalk'
	},
	{
		preview: 'https://media.istockphoto.com/id/1128862134/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%80%D0%B8-%D1%81%D0%BA%D0%B0%D1%80%D0%B1%D0%BD%D0%B8%D1%87%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%B8%D1%86%D1%96-%D0%BC%D0%B0%D0%BB%D0%B8%D0%B9-%D1%81%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%96%D0%B9-%D1%96-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9.jpg?s=1024x1024&w=is&k=20&c=u-trIcE-jw21SVMF1vIyOqmH4VU_-TLDN_AiKQUcrBY=',
		original: 'https://media.istockphoto.com/id/1128862134/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%80%D0%B8-%D1%81%D0%BA%D0%B0%D1%80%D0%B1%D0%BD%D0%B8%D1%87%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%B8%D1%86%D1%96-%D0%BC%D0%B0%D0%BB%D0%B8%D0%B9-%D1%81%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D1%96%D0%B9-%D1%96-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9.jpg?s=2048x2048&w=is&k=20&c=4KrHvbNRFQdNqhsIw5VeOoqP6DHHpas-UAcYdnZuOgw=',
		description: 'Three boxes on the shelf: small, medium and large'
	},
	{
		preview: 'https://media.istockphoto.com/id/1022128056/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D1%83%D0%B4%D0%B0%D1%80-%D0%BF%D0%B5%D1%80%D1%88%D0%B8%D0%B9-%D1%88%D0%BC%D0%B0%D1%82%D0%BE%D0%BA-%D0%B4%D0%BE%D0%BC%D1%96%D0%BD%D0%BE.jpg?s=1024x1024&w=is&k=20&c=USllPdhG_7tKsWGzWunE7GKz2XYGeO--SWWa9uKfzPE=',
		original: 'https://media.istockphoto.com/id/1022128056/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D1%96%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D1%83%D0%B4%D0%B0%D1%80-%D0%BF%D0%B5%D1%80%D1%88%D0%B8%D0%B9-%D1%88%D0%BC%D0%B0%D1%82%D0%BE%D0%BA-%D0%B4%D0%BE%D0%BC%D1%96%D0%BD%D0%BE.jpg?s=2048x2048&w=is&k=20&c=nTjMhRsW7BIfTpU1ZVE61hMjfzzjRMFDyDYEZcEEKqQ=',
		description: 'Dominos effect: businessman hits the first domino'
	},
	{
		preview: 'https://media.istockphoto.com/id/474578119/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B6%D0%BE%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F.jpg?s=1024x1024&w=is&k=20&c=Kkr3vdsgmVDOJ9L6Y1GV6rh7DK6v4FJeweDIEfhKBg4=',
		original: 'https://media.istockphoto.com/id/474578119/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B6%D0%BE%D1%80%D1%81%D1%82%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F.jpg?s=2048x2048&w=is&k=20&c=RkTfTfbEFGWLMgRqVYLTRAR1_UGQkFfLRAm0ddR2KFs=',
		description: 'Hard concept'
	},
]

const gallery = document.querySelector('ul.gallery');

function createGalleryItem(image) {
	return `
			<li>
					<img src="${image.preview}" data-source="${image.original}" alt="${image.description}">
			</li>
	`;
}

function renderGallery(imagesArray) {
	const galleryItems = imagesArray.map(createGalleryItem).join('');
	gallery.innerHTML = galleryItems;
}

renderGallery(imagesArray);

gallery.addEventListener('click', e => {
	if (e.target.tagName === 'IMG') {
		const largeImageURL = e.target.dataset.source;
		const alt = e.target.alt;

		const instance = basicLightbox.create(`
					<img src="${largeImageURL}" alt="${alt}">
			`);

		instance.show();
	}
});