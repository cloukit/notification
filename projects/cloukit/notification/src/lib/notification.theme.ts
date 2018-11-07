/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import {
  CloukitBaseCssDefinitions, CloukitComponentTheme, CloukitIconDefinition,
  CloukitSvgCssDefinitions,
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
    this.buildStyle('outlet', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        width: '430px',
        zIndex: 9999,
        color: '#333',
        position: 'fixed',
      });

    this.buildStyle('left', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        width: '30px',
        maxWidth: '30px',
        flex: 1,
      });

    this.buildStyle('right', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        width: '22px',
        maxWidth: '22px',
        flex: 1,
      });

    this.buildStyle('center', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        display: 'flex',
        flexDirection: 'column',
        flex: 3,
      });

    this.buildStyle('links', 'ready', 'base');

    this.buildStyle('wrapper', 'fadeIn', 'latest')
      .withStyles(<CloukitBaseCssDefinitions>{
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
      });

    this.buildStyle('wrapper', 'ready', 'latest')
      .inheritFrom('wrapper', 'fadeIn', 'latest')
      .withStyles(<CloukitBaseCssDefinitions>{
        opacity: 1,
        margin: '10px 10px 10px 10px',
        transform: 'translateX(0) translateY(0)',
      });

    this.buildStyle('wrapper', 'ready', 'latestPlusOne')
      .inheritFrom('wrapper', 'fadeIn', 'latest')
      .withStyles(<CloukitBaseCssDefinitions>{
        opacity: 1,
        margin: '10px 10px 10px 10px',
        transform: 'translateX(0) translateY(100%) translateY(20px)',
      });

    this.buildStyle('wrapper', 'ready', 'latestPlusN')
      .inheritFrom('wrapper', 'fadeIn', 'latest')
      .withStyles(<CloukitBaseCssDefinitions>{
        opacity: 1,
        margin: '10px 10px 10px 10px',
        transform: 'translateX(0) translateY(200%) translateY(40px)',
      });

    this.buildStyle('wrapper', 'fadeOut', 'latest')
      .inheritFrom('wrapper', 'ready', 'latest')
      .withStyles(<CloukitBaseCssDefinitions>{
        opacity: 0,
        zIndex: 10000,
        margin: '10px 800px 10px -800px',
      });

    this.buildStyle('wrapper', 'fadeOut', 'latestPlusOne')
      .inheritFrom('wrapper', 'ready', 'latestPlusOne')
      .withStyles(<CloukitBaseCssDefinitions>{
        opacity: 0,
        zIndex: 10000,
        margin: '10px 800px 10px -800px',
      });

    this.buildStyle('wrapper', 'fadeOut', 'latestPlusN')
      .inheritFrom('wrapper', 'ready', 'latestPlusN')
      .withStyles(<CloukitBaseCssDefinitions>{
        opacity: 0,
        zIndex: 10000,
        margin: '10px 800px 10px -800px',
      });

    //
    // notification
    //
    this.buildStyle('notification', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        backgroundColor: '#fff',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
      });

    this.buildStyle('notification', 'ready', 'success')
      .inheritFrom('notification', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #52C416',
      });

    this.buildStyle('notification', 'ready', 'info')
      .inheritFrom('notification', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #005FFF',
      });

    this.buildStyle('notification', 'ready', 'warn')
      .inheritFrom('notification', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #E77B12',
      });

    this.buildStyle('notification', 'ready', 'error')
      .inheritFrom('notification', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        border: '1px solid #C41616',
      });

    //
    // statusIcon
    //
    this.buildStyle('statusIcon', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        width: '20px',
      })
      .withIconStyles({
        width: '20px',
      });

    this.buildStyle('statusIcon', 'ready', 'success')
      .inheritFrom('statusIcon', 'ready', 'base')
      .withIcon(<CloukitIconDefinition>{
        svgPathD: CloukitIcons.checkCircle,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#52C416',
      });

    this.buildStyle('statusIcon', 'ready', 'info')
      .inheritFrom('statusIcon', 'ready', 'base')
      .withIcon(<CloukitIconDefinition>{
        svgPathD: CloukitIcons.infoCircle,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#005FFF',
      });

    this.buildStyle('statusIcon', 'ready', 'warn')
      .inheritFrom('statusIcon', 'ready', 'base')
      .withIcon(<CloukitIconDefinition>{
        svgPathD: CloukitIcons.exclamationCircle,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#E77B12',
      });

    this.buildStyle('statusIcon', 'ready', 'error')
      .inheritFrom('statusIcon', 'ready', 'base')
      .withIcon(<CloukitIconDefinition>{
        svgPathD: CloukitIcons.exclamationTriangle,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        fill: '#C41616',
      });



    //
    // closeIcon
    //
    this.buildStyle('closeIcon', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        width: '20px',
        cursor: 'pointer',
        userSelect: 'none',
      })
      .withIcon(<CloukitIconDefinition>{
        svgPathD: CloukitIcons.cross,
      })
      .withIconStyles(<CloukitSvgCssDefinitions>{
        width: '20px',
        fill: '#333',
      });

    this.buildStyle('closeIcon', 'ready', 'success')
      .inheritFrom('closeIcon', 'ready', 'base');
    this.buildStyle('closeIcon', 'ready', 'info')
      .inheritFrom('closeIcon', 'ready', 'base');
    this.buildStyle('closeIcon', 'ready', 'warn')
      .inheritFrom('closeIcon', 'ready', 'base');
    this.buildStyle('closeIcon', 'ready', 'error')
      .inheritFrom('closeIcon', 'ready', 'base');
    this.buildStyle('closeIcon', 'ready', 'successHover')
      .inheritFrom('closeIcon', 'ready', 'success');
    this.buildStyle('closeIcon', 'ready', 'infoHover')
      .inheritFrom('closeIcon', 'ready', 'info');
    this.buildStyle('closeIcon', 'ready', 'warnHover')
      .inheritFrom('closeIcon', 'ready', 'warn');
    this.buildStyle('closeIcon', 'ready', 'errorHover')
      .inheritFrom('closeIcon', 'ready', 'error');

    //
    // title
    //
    this.buildStyle('title', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        fontWeight: 700,
        color: '#333',
        marginBottom: '10px',
      });

    this.buildStyle('title', 'ready', 'success')
      .inheritFrom('title', 'ready', 'base');
    this.buildStyle('title', 'ready', 'info')
      .inheritFrom('title', 'ready', 'base');
    this.buildStyle('title', 'ready', 'warn')
      .inheritFrom('title', 'ready', 'base');
    this.buildStyle('title', 'ready', 'error')
      .inheritFrom('title', 'ready', 'base');

    //
    // message
    //
    this.buildStyle('message', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        fontWeight: 400,
        color: '#333',
        marginBottom: '10px',
      });

    this.buildStyle('message', 'ready', 'success')
      .inheritFrom('message', 'ready', 'base');
    this.buildStyle('message', 'ready', 'info')
      .inheritFrom('message', 'ready', 'base');
    this.buildStyle('message', 'ready', 'warn')
      .inheritFrom('message', 'ready', 'base');
    this.buildStyle('message', 'ready', 'error')
      .inheritFrom('message', 'ready', 'base');

    //
    // linkOne
    //
    this.buildStyle('linkOne', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        outline: 0,
        border: 0,
        backgroundColor: 'transparent',
        color: '#333',
        textDecoration: 'none',
        padding: 0,
        fontSize: '1rem',
        marginRight: '20px',
        cursor: 'pointer',
      });

    this.buildStyle('linkOne', 'ready', 'success')
      .inheritFrom('linkOne', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#52C416',
      });

    this.buildStyle('linkOne', 'ready', 'successHover')
      .inheritFrom('linkOne', 'ready', 'success')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

    this.buildStyle('linkOne', 'ready', 'info')
      .inheritFrom('linkOne', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#005FFF',
      });

    this.buildStyle('linkOne', 'ready', 'infoHover')
      .inheritFrom('linkOne', 'ready', 'info')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });;

    this.buildStyle('linkOne', 'ready', 'warn')
      .inheritFrom('linkOne', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#E77B12',
      });

    this.buildStyle('linkOne', 'ready', 'warnHover')
      .inheritFrom('linkOne', 'ready', 'warn')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

    this.buildStyle('linkOne', 'ready', 'error')
      .inheritFrom('linkOne', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#C41616',
      });

    this.buildStyle('linkOne', 'ready', 'errorHover')
      .inheritFrom('linkOne', 'ready', 'error')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });


    //
    // linkTwo
    //
    this.buildStyle('linkTwo', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        outline: 0,
        border: 0,
        backgroundColor: 'transparent',
        color: '#333',
        textDecoration: 'none',
        padding: 0,
        fontSize: '1rem',
        marginRight: '20px',
        cursor: 'pointer',
      });

    this.buildStyle('linkTwo', 'ready', 'success')
      .inheritFrom('linkTwo', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#52C416',
      });

    this.buildStyle('linkTwo', 'ready', 'successHover')
      .inheritFrom('linkTwo', 'ready', 'success')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

    this.buildStyle('linkTwo', 'ready', 'info')
      .inheritFrom('linkTwo', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#005FFF',
      });

    this.buildStyle('linkTwo', 'ready', 'infoHover')
      .inheritFrom('linkTwo', 'ready', 'info')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

    this.buildStyle('linkTwo', 'ready', 'warn')
      .inheritFrom('linkTwo', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#E77B12',
      });

    this.buildStyle('linkTwo', 'ready', 'warnHover')
      .inheritFrom('linkTwo', 'ready', 'warn')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

    this.buildStyle('linkTwo', 'ready', 'error')
      .inheritFrom('linkTwo', 'ready', 'base')
      .withStyles(<CloukitBaseCssDefinitions>{
        color: '#C41616',
      });

    this.buildStyle('linkTwo', 'ready', 'errorHover')
      .inheritFrom('linkTwo', 'ready', 'error')
      .withStyles(<CloukitBaseCssDefinitions>{
        textDecoration: 'underline',
      });

  }

}
