import { cyan, red, magenta, gray, yellow, white, green, blue } from 'colorette';
import { Timestamp } from '@sapphire/time-utilities';

const logs = (content: string[], type = 'log') => {
	const time = `[${cyan(new Timestamp('YYYY-MM-DD HH:mm:ss').toString())}]:`;

	switch (type) {
		case 'log':
			return console.log(`${time} ${gray(type.toUpperCase())} | ${content} `);
		case 'warn':
			return console.log(`${time} ${yellow(type.toUpperCase())} | ${content} `);
		case 'error':
			return console.log(`${time} ${red(type.toUpperCase())} | ${content} `);
		case 'debug':
			return console.log(`${time} ${magenta(type.toUpperCase())} | ${content} `);
		case 'cmd':
			return console.log(`${time} ${white(type.toUpperCase())} | ${content}`);
		case 'ready':
			return console.log(`${time} ${green(type.toUpperCase())} | ${content}`);
		case 'xp':
			return console.log(`${time} ${white(type.toUpperCase())} | ${content}`);
		case 'bot':
			return console.log(`${time} ${blue(type.toUpperCase())} | ${content}`);
		default:
			throw new TypeError('Logger type must be either warn, debug, log, ready, cmd or error.');
	}
};

const error = (...args: string[]) => {
	const t: [string[], string] = [args, 'error'];
	logs(...t);
};

const warn = (...args: string[]) => {
	const t: [string[], string] = [args, 'warn'];
	logs(...t);
};

const debug = (...args: string[]) => {
	const t: [string[], string] = [args, 'debug'];
	logs(...t);
};

const cmd = (...args: string[]) => {
	const t: [string[], string] = [args, 'cmd'];
	logs(...t);
};

const ready = (...args: string[]) => {
	const t: [string[], string] = [args, 'ready'];
	logs(...t);
};

const log = (...args: string[]) => {
	const t: [string[], string] = [args, 'log'];
	logs(...t);
};

export default {
	error,
	warn,
	debug,
	cmd,
	ready,
	log
};
