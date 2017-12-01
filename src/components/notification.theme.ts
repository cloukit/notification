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
        border: `1px solid red;`,
        width: '430px',
        zIndex: 9999,
        color: '#333',
        marginLeft: '40px',
        marginBottom: '40px',
        position: 'fixed',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('left', 'ready', 'base', {
      style: {
        border: `1px solid red;`,

      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('right', 'ready', 'base', {
      style: {
        border: `1px solid red;`,
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('center', 'ready', 'base', {
      style: {
        border: `1px solid #ccc;`,
        display: 'flex',
        flexDirection: 'row',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);

    this.createStyle('links', 'ready', 'base', {
      style: {
        border: `1px solid red;`,
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
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'ready', 'latestPlusOne',
      this.merge(this.getStyle('wrapper', 'fadeIn', 'latest'), {
        style: {
          opacity: 1,
          margin: '10px 10px 10px 10px',
          transform: 'translateX(0) translateY(100%) translateY(20px)',
          boxShadow: '0',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'ready', 'latestPlusN',
      this.merge(this.getStyle('wrapper', 'fadeIn', 'latest'), {
        style: {
          opacity: 1,
          margin: '10px 10px 10px 10px',
          transform: 'translateX(0) translateY(200%) translateY(40px)',
          boxShadow: '0',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('wrapper', 'fadeOut', 'latest',
      this.merge(this.getStyle('wrapper', 'fadeIn', 'latest'), {
        style: {

        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));


    //
    // notification
    //
    this.createStyle('notification', 'ready', 'base', {
      style: {
        border: '1px solid green',
        backgroundColor: '#fff',
        padding: '10px',
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('notification', 'ready', 'success',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid blue',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('notification', 'ready', 'info',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid blue',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('notification', 'ready', 'warn',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid orange',
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('notification', 'ready', 'error',
      this.merge(this.getStyle('notification', 'ready', 'base'), {
        style: {
          border: '1px solid red',
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
      },
      icon: {
        svgPathD: CloukitIcons.cross,
        svgStyle: {
          width: '20px',
        }
      }
    } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition);
    this.createStyle('closeIcon', 'ready', 'success',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgStyle: {
            fill: 'green',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'info',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgStyle: {
            fill: 'green',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'warn',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgStyle: {
            fill: 'green',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
    this.createStyle('closeIcon', 'ready', 'error',
      this.merge(this.getStyle('closeIcon', 'ready', 'base'), {
        style: {
        },
        icon: {
          svgStyle: {
            fill: 'green',
          }
        }
      } as CloukitStatefulAndModifierAwareElementThemeStyleDefinition));
  }

}
