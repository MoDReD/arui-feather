/* eslint import/no-extraneous-dependencies: 0 */

import Type from 'prop-types';
import { compiler } from 'markdown-to-jsx'; // Via react-styleguidist package

import Link from '../../../src/link';
import Label from '../../../src/label'; // instead of Text
import Paragraph from '../../../src/paragraph'; // instead of Para
import Heading from '../../../src/heading'; // instead of MarkdownHeading
import Checkbox from '../../../src/checkbox';

import Code from '../code';

import Blockquote from './blockquote';
import Pre from './pre';
import Hr from './hr';
import { Table, TableHead, TableBody, TableRow, TableCell } from './table';

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax, max-len
require('!!react-styleguidist/loaders/style-loader!react-styleguidist/loaders/css-loader!highlight.js/styles/tomorrow.css');

const baseOverrides = {
    a: {
        component: Link
    },
    h1: {
        component: Heading,
        props: {
            level: 1,
            size: 'xl'
        }
    },
    h2: {
        component: Heading,
        props: {
            level: 2,
            size: 'l'
        }
    },
    h3: {
        component: Heading,
        props: {
            level: 3,
            size: 'm'
        }
    },
    h4: {
        component: Heading,
        props: {
            level: 4,
            size: 's'
        }
    },
    h5: {
        component: Heading,
        props: {
            level: 5,
            size: 's'
        }
    },
    h6: {
        component: Heading,
        props: {
            level: 6,
            size: 's'
        }
    },
    p: {
        component: Paragraph,
        props: {
            semantic: 'p'
        }
    },
    em: {
        component: Label, // TODO @teryaew: add Text component?
        props: {
            semantic: 'em'
        }
    },
    strong: {
        component: Label, // TODO @teryaew: add Text component?
        props: {
            semantic: 'strong'
        }
    },
    ul: {
        props: {
            className: 'examples__list'
        }
    },
    ol: {
        props: {
            className: 'examples__list examples__list_ordered'
        }
    },
    blockquote: {
        component: Blockquote
    },
    code: {
        component: Code
    },
    pre: {
        component: Pre
    },
    input: {
        component: Checkbox
    },
    hr: {
        component: Hr
    },
    table: {
        component: Table
    },
    thead: {
        component: TableHead
    },
    th: {
        component: TableCell,
        props: {
            header: true
        }
    },
    tbody: {
        component: TableBody
    },
    tr: {
        component: TableRow
    },
    td: {
        component: TableCell
    }
};

const inlineOverrides = {
    ...baseOverrides,
    p: {
        component: Text
    }
};

function Markdown({ text, inline }) {
    const overrides = inline ? inlineOverrides : baseOverrides;
    return compiler(text, { overrides, forceBlock: true });
}

Markdown.propTypes = {
    text: Type.string.isRequired,
    inline: Type.bool
};

export default Markdown;