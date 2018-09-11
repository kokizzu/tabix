import React from 'react';
import SplitPane, { Props as SplitPaneProps } from 'react-split-pane';
import classNames from 'classnames';
import css from './Splitter.css';

export default function Splitter({
  className,
  ...rest
}: SplitPaneProps & { children: React.ReactNode }) {
  return (
    <SplitPane
      split="vertical"
      minSize={300}
      defaultSize={350}
      className={classNames(css.root, className)}
      {...rest}
    />
  );
}
