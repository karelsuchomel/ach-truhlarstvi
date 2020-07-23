// Chair icon
const iconEl = wp.element.createElement('svg', { width: 20, height: 20 },
  wp.element.createElement('g', { transform:"matrix(.66667 0 0 .71427 -.67 -1.43)", strokeWidth:"1.45" },
	  wp.element.createElement('path', { d: "M24.53 16.9H23.1V9.68h.94c.26 0 .48-.2.48-.45V2.45a.46.46 0 00-.48-.45H7.95c-.26 0-.48.2-.48.45v6.78c0 .25.22.45.48.45h.94v7.22H7.47c-.26 0-.47.2-.47.45v2.26c0 .25.21.45.47.45v9.49c0 .25.22.45.48.45h1.9c.25 0 .47-.2.47-.45v-2.71h11.36v2.7c0 .26.22.46.48.46h1.9c.25 0 .47-.2.47-.45v-9.49c.26 0 .47-.2.47-.45v-2.26a.46.46 0 00-.47-.45zm-4.27-7.22v7.22h-8.52V9.68zm1.42 14.9H10.32v-4.52h11.36z" } ),
	  wp.element.createElement('ellipse', { ry:".45", rx:".47", cx:"9.37", cy:"3.81", fill:"#fff" } ),
	  wp.element.createElement('ellipse', { ry:".45", rx:".47", cx:"9.37", cy:"7.87", fill:"#fff" } ),
	  wp.element.createElement('ellipse', { ry:".45", rx:".47", cx:"22.63", cy:"3.81", fill:"#fff" } ),
	  wp.element.createElement('ellipse', { ry:".45", rx:".47", cx:"22.63", cy:"7.87", fill:"#fff" } ),
  ),
);

wp.blocks.registerBlockType( 'ach/product-showcase', {
	title: 'Product showcase',
	icon: iconEl,
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