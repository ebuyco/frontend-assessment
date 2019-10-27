import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAccordionContext } from './AccordionContent';
import { isFunction } from './isFunction';
import css from './styles/index.scss';

export const AccordionSection = ({ children, title, index }) => {
  const {
    focusRef,
    selected,
    expandedAll,
    onToggle,
    onNavigation,
    id
  } = useAccordionContext();
  // const sectionId = `${id}-${index}-section`;
  // const labelId = `${id}-${index}-label`;
  const expanded = expandedAll[index];
  const labelRef = useRef();
  useEffect(() => {
    if (index === selected[0] && labelRef.current) {
      labelRef.current.focus();
    }
  }, [index, selected]);

  return (
    <>
      <div
        role='button'
        aria-expanded={expanded}
        // aria-controls={sectionId}
        // id={labelId}
        className={css.accordion__section}
        tabIndex={0}
        onClick={() => onToggle && onToggle(index)}
        onKeyDown={(e) => {
          switch (e.key) {
            case ' ':
            case 'Enter':
              e.preventDefault();
              onToggle && onToggle(index);
              break;
            case 'ArrowDown':
              e.preventDefault();
              onNavigation('ArrowDown');
              break;
            case 'ArrowUp':
              e.preventDefault();
              onNavigation('ArrowUp');
              break;
            case 'Home':
              e.preventDefault();
              onNavigation('Home');
              break;
            case 'End':
              e.preventDefault();
              onNavigation('End');
              break;
            default:
          }
        }}
        onFocus={() => {
          focusRef.current = index;
        }}
        onBlur={() => {
          focusRef.current = null;
        }}
        ref={labelRef}
      >
        {title}
        <span className={css.arrows} aria-hidden>{expanded ? '▲' : '▼'}</span>
      </div>
      <div
        role='region'
        // aria-labelledby={labelId}
        // id={sectionId}
        hidden={!expanded}
        className={css.accordion__content}
      >
        {isFunction(children) ? (expanded ? children() : null) : children}
      </div>
    </>
  );
};

AccordionSection.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};
