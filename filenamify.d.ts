export interface Options {
	/**
	String to use as replacement for reserved filename characters.

	Cannot contain: `<` `>` `:` `"` `/` `\` `|` `?` `*`

	@default '!'
	*/
	readonly replacement?: string;

	/**
	Truncate the filename to the given length.

	Systems generally allow up to 255 characters, but we default to 100 for usability reasons.

	@default 100
	*/
	readonly maxLength?: number;
}

/**
Convert a string to a valid filename.

@example
```
import filenamify from 'filenamify';

filenamify('<foo/bar>');
//=> 'foo!bar'

filenamify('foo:"bar"', {replacement: '🐴'});
//=> 'foo🐴bar'
```
*/
export default function filenamify(string: string, options?: Options): string;
