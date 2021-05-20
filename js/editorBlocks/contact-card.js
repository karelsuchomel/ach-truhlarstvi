wp.blocks.registerBlockType( 'ach/contact-card', {
	title: 'Contact card',
	icon: 'id-alt',
	category: 'common',
	attributes: {
		textContent: {
			type: 'string'
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
	},
	edit: (props) => {
		// Destructuring
		const {
			attributes: {
				mediaID,
				mediaURL,
			},
		} = props;

		const updateText = (newContent) => {
			props.setAttributes({
				textContent: newContent
			});
		};

		const onSelectImage = ( media ) => {
			props.setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};

		return (
			<div className={props.className}>
				<div className="image-wrapper">
					<wp.blockEditor.MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<wp.components.Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! mediaID ? 'Upload Image' : <img src={ mediaURL } alt='Upload Recipe Image' /> }
							</wp.components.Button>
						) }
					/>
				</div>
				<div className="text-card">
					<div className="text-wrapper">
						<wp.blockEditor.RichText
							tagName="p"
							onChange={ updateText }
							value={ props.attributes.textContent }
							placeholder="More details"
						/>
					</div>
				</div>
			</div>
		);
	},
	save: (props) => {
		return (
			<div>
				<div className="image-wrapper">
				{
					props.attributes.mediaURL && (
						<img className="recipe-image" src={ props.attributes.mediaURL } alt='Recipe Image' />
					)
				}
				</div>
				<div className="text-card">
					<div className="text-wrapper">
						<wp.blockEditor.RichText.Content
							tagName="p"
							value={ props.attributes.textContent }
						/>
					</div>
				</div>
			</div>
		);
	},
} );