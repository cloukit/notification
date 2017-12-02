/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitComponentTheme,
  CloukitStatefulAndModifierAwareElementThemeStyleDefinition,
} from '@cloukit/theme';
import { CloukitIcons } from '@cloukit/icon';

/**
 * The default theme
 */
export class CloukitNotificationComponentThemeDefault extends CloukitComponentTheme {

  constructor() {
    super();
    //
    // BOX ELEMENTS
    //
    this.createStyle('outlet', 'ready', 'base', {
      style: {
        width: '430px',
        zIndex: 9999,
        color: '#333',
        position: 'fixed',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('left', 'ready', 'base', {
      style: {
        width: '30px',
        maxWidth: '30px',
        flex: 1,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('right', 'ready', 'base', {
      style: {
        width: '22px',
        maxWidth: '22px',
        flex: 1,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('center', 'ready', 'base', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('links', 'ready', 'base', {
      style: {
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('wrapper', 'fadeIn', 'latest', {
      style: {
        position: 'absolute',
        bottom: '50px',
        width: '400px',
        maxWidth: '400px',
        transition: `
          margin-left 300ms linear,
          margin-right 300ms linear,
          margin-top 300ms linear,
          margin-bottom 300ms linear,
          opacity 300ms ease-in-out,
          transform 300ms linear`,
        opacity: 0,
        zIndex: 10000,
        margin: '10px 800px 10px -800px',
        boxShadow: '0 0 1px rgba(9, 30, 66, 0.31), 0 20px 32px -8px rgba(9, 30, 66, 0.25)',
  }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('wrapper', 'ready', 'latest',
      this.merge(this.getStyle('wrapper', 'fadeIn', 'latest'), {
        style: {
          opacity: 1,
          margin: '10px 10px 10px 10px',
          transform: 'translateX(0) translateY(0)',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'ready', 'latestPlusOne',
      this.merge(this.getStyle('wrapper', 'fadeIn', 'latest'), {
        style: {
          opacity: 1,
          margin: '10px 10px 10px 10px',
          transform: 'translateX(0) translateY(100%) translateY(20px)',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'ready', 'latestPlusN',
      this.merge(this.getStyle('wrapper', 'fadeIn', 'latest'), {
        style: {
          opacity: 1,
          margin: '10px 10px 10px 10px',
          transform: 'translateX(0) translateY(200%) translateY(40px)',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'fadeOut', 'latest',
      this.merge(this.getStyle('wrapper', 'ready', 'latest'), {
        style: {
          opacity: 0,
          zIndex: 10000,
          margin: '10px 800px 10px -800px',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'fadeOut', 'latestPlusOne',
      this.merge(this.getStyle('wrapper', 'ready', 'latestPlusOne'), {
        style: {
          opacity: 0,
          zIndex: 10000,
          margin: '10px 800px 10px -800px',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));


    //
    // notification
    //
    this.createStyle('notification', 'ready', 'base', {
      style: {
        backgroundColor: '#fff',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('notification', 'ready', 'success',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid #52C416',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('notification', 'ready', 'info',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid #005FFF',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('notification', 'ready', 'warn',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid #E77B12',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('notification', 'ready', 'error',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid #C41616',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    //
    // statusIcon
    //
    this.createStyle('statusIcon', 'ready', 'base', {
      style: {
        width: '20px',
      },
      icon: {
        svgStyle: {
          width: '20px',
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('statusIcon', 'ready', 'success',
      this.merge(this.getStyle('statusIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgPathD: CloukitIcons.checkCircle,
          svgStyle: {
            fill: '#52C416',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('statusIcon', 'ready', 'info',
      this.merge(this.getStyle('statusIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgPathD: CloukitIcons.infoCircle,
          svgStyle: {
            fill: '#005FFF',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('statusIcon', 'ready', 'warn',
      this.merge(this.getStyle('statusIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgPathD: CloukitIcons.exclamationCircle,
          svgStyle: {
            fill: '#E77B12',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('statusIcon', 'ready', 'error',
      this.merge(this.getStyle('statusIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgPathD: CloukitIcons.exclamationTriangle,
          svgStyle: {
            fill: '#C41616',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));


    //
    // closeIcon
    //
    this.createStyle('closeIcon', 'ready', 'base', {
      style: {
        width: '20px',
        cursor: 'pointer',
        userSelect: 'none',
      },
      icon: {
        svgPathD: CloukitIcons.cross,
        svgStyle: {
          width: '20px',
          fill: '#333',
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('closeIcon', 'ready', 'success',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'info',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'warn',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'error',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'successHover',
      this.merge(this.getStyle('closeIcon', 'ready', 'success'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'infoHover',
      this.merge(this.getStyle('closeIcon', 'ready', 'info'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'warnHover',
      this.merge(this.getStyle('closeIcon', 'ready', 'warn'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'errorHover',
      this.merge(this.getStyle('closeIcon', 'ready', 'error'), {
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    //
    // title
    //
    this.createStyle('title', 'ready', 'base', {
      style: {
        fontWeight: 700,
        color: '#333',
        marginBottom: '10px',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('title', 'ready', 'success',
      this.merge(this.getStyle('title', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('title', 'ready', 'info',
      this.merge(this.getStyle('title', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('title', 'ready', 'warn',
      this.merge(this.getStyle('title', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('title', 'ready', 'error',
      this.merge(this.getStyle('title', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    //
    // message
    //
    this.createStyle('message', 'ready', 'base', {
      style: {
        fontWeight: 400,
        color: '#333',
        marginBottom: '10px',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('message', 'ready', 'success',
      this.merge(this.getStyle('message', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('message', 'ready', 'info',
      this.merge(this.getStyle('message', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('message', 'ready', 'warn',
      this.merge(this.getStyle('message', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('message', 'ready', 'error',
      this.merge(this.getStyle('message', 'ready', 'base'), {
        style: {
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));

    //
    // linkOne
    //
    this.createStyle('linkOne', 'ready', 'base', {
      style: {
        outline: 0,
        border: 0,
        backgroundColor: 'transparent',
        color: '#333',
        textDecoration: 'none',
        padding: 0,
        fontSize: '1rem',
        marginRight: '20px',
        cursor: 'pointer',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('linkOne', 'ready', 'success',
      this.merge(this.getStyle('linkOne', 'ready', 'base'), {
        style: {
          color: '#52C416',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'successHover',
      this.merge(this.getStyle('linkOne', 'ready', 'success'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'info',
      this.merge(this.getStyle('linkOne', 'ready', 'base'), {
        style: {
          color: '#005FFF',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'infoHover',
      this.merge(this.getStyle('linkOne', 'ready', 'info'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'warn',
      this.merge(this.getStyle('linkOne', 'ready', 'base'), {
        style: {
          color: '#E77B12',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'warnHover',
      this.merge(this.getStyle('linkOne', 'ready', 'warn'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'error',
      this.merge(this.getStyle('linkOne', 'ready', 'base'), {
        style: {
          color: '#C41616',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkOne', 'ready', 'errorHover',
      this.merge(this.getStyle('linkOne', 'ready', 'error'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));


    //
    // linkTwo
    //
    this.createStyle('linkTwo', 'ready', 'base', {
      style: {
        outline: 0,
        border: 0,
        backgroundColor: 'transparent',
        color: '#333',
        textDecoration: 'none',
        padding: 0,
        fontSize: '1rem',
        marginRight: '20px',
        cursor: 'pointer',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('linkTwo', 'ready', 'success',
      this.merge(this.getStyle('linkTwo', 'ready', 'base'), {
        style: {
          color: '#52C416',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'successHover',
      this.merge(this.getStyle('linkTwo', 'ready', 'success'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'info',
      this.merge(this.getStyle('linkTwo', 'ready', 'base'), {
        style: {
          color: '#005FFF',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'infoHover',
      this.merge(this.getStyle('linkTwo', 'ready', 'info'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'warn',
      this.merge(this.getStyle('linkTwo', 'ready', 'base'), {
        style: {
          color: '#E77B12',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'warnHover',
      this.merge(this.getStyle('linkTwo', 'ready', 'warn'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'error',
      this.merge(this.getStyle('linkTwo', 'ready', 'base'), {
        style: {
          color: '#C41616',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('linkTwo', 'ready', 'errorHover',
      this.merge(this.getStyle('linkTwo', 'ready', 'error'), {
        style: {
          textDecoration: 'underline',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }

}
