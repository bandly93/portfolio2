import React from 'react';

let logos = ['react','redux','node','express','postgres','mongodb'];
let path = '../images/';
let ext = '.png';

const StackLogo = () => {
	return logos.map(logo => <img
		style = {{'background' : 'white'}}
		key = {logo}
		src = {path+logo+ext}
		height = '100'
		width = '150'
		/>
	)
}

export default StackLogo;
