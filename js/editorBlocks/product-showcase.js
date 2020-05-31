wp.blocks.registerBlockType( 'ach/product-showcase', {
	title: 'Product showcase',
	icon: 'smiley',
	category: 'common',
	attributes: {
		headerText: {
			type: 'string'
		},
		constructionTime: {
			type: 'string',
		},
		materialsUsed: {
			type: 'string'
		},
	},
	edit: (props) => {
		const updateHeader = (newContent) => {
			props.setAttributes({
				headerText: newContent
			});
		};

		const updateTimeSpend = (newContent) => {
			props.setAttributes({
				constructionTime: newContent
			});
		};

		const updateMaterialsUsed = (newContent) => {
			props.setAttributes({
				materialsUsed: newContent
			});
		};

		const PRODUCT_GALLERY_TEMPLATE = [
			[ 'core/gallery', {
				imageCrop: false,
				columns: 1,
				linkTo: 'media',
			} ],
		]

		return (
			<div className={props.className}>
				<div className="gallery-wrapper">
					<wp.blockEditor.InnerBlocks
						template={ PRODUCT_GALLERY_TEMPLATE }
						templateLock="all"
					/>
				</div>
				<div className="text-card">
					<wp.blockEditor.RichText
						tagName="h3"
						onChange={ updateHeader }
						value={ props.attributes.headerText }
						placeholder="Název zakázky"
					/>
					<wp.blockEditor.RichText
						tagName="div"
						className="construction-time"
						onChange={ updateTimeSpend }
						value={ props.attributes.constructionTime }
						placeholder="Přibližný počet týdnů nebo měsíců"
					/>
					<wp.blockEditor.RichText
						tagName="div"
						className="materials-used"
						onChange={ updateMaterialsUsed }
						value={ props.attributes.materialsUsed }
						placeholder="Dub, Buk, Smrk?"
					/>
				</div>
			</div>
		);
	},
	save: (props) => {
		return (
			<div>
				<div className="gallery-wrapper">
					<wp.blockEditor.InnerBlocks.Content />
				</div>
				<div className="text-card">
					<wp.blockEditor.RichText.Content
						tagName="h3"
						value={ props.attributes.headerText }
					/>
					<wp.blockEditor.RichText.Content
						tagName="div"
						className="construction-time"
						value={ props.attributes.constructionTime }
					/>
					<wp.blockEditor.RichText.Content
						tagName="div"
						className="materials-used"
						value={ props.attributes.materialsUsed }
					/>
				</div>
			</div>
		);
	},
} );