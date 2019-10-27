import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import stylesheet from '../components/styles/index.scss';

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
