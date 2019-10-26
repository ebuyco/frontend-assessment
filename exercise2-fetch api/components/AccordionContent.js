import React, {
  useRef,
  createContext,
  useContext,
  useState,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import css from './styles/index.scss';
import { useId } from './useId';
import { useAccordionState } from './useAccordionState';

const AccordionContext = createContext({
  focusRef: {},
  selected: [null],
  expandedAll: [],
  onToggle: undefined,
  onNavigation: () => undefined,
  id: null
});
export const useAccordionContext = () => useContext(AccordionContext);

export const Accordion = ({
  children,
  expanded: controlledExpanded,
  onToggle: controlledOnToggle,
  id,
  ...rest
}) => {
  const isControlledRef = useRef(controlledExpanded != null);
  if (process.env.NODE_ENV === 'development') {
    if (isControlledRef.current && controlledExpanded == null) {
      console.warn('Accordion is changing from controlled to uncontrolled.');
    }
    if (!isControlledRef.current && controlledExpanded != null) {
      console.warn('Accordion is changing from  uncontrolled to controlled.');
    }
  }

  const uncontrolled = useAccordionState([]);
  const expanded = isControlledRef.current
    ? controlledExpanded
    : uncontrolled.expanded;
  const onToggle = isControlledRef.current
    ? controlledOnToggle
    : uncontrolled.onToggle;

  const uid = useId(id);
  const focusRef = useRef(null);
  const [selected, setSelected] = useState([null]);

  const context = useMemo(
    () => ({
      focusRef,
      selected,
      expandedAll: expanded,
      onToggle,
      id: uid,
      onNavigation: (key) => {
        switch (key) {
          case 'ArrowDown':
            if (focusRef.current >= React.Children.count(children) - 1) {
              setSelected([0]);
            } else {
              setSelected([focusRef.current + 1]);
            }
            break;
          case 'ArrowUp':
            if (focusRef.current <= 0) {
              setSelected([React.Children.count(children) - 1]);
            } else {
              setSelected([focusRef.current - 1]);
            }
            break;
          case 'Home':
            setSelected([0]);
            break;
          case 'End':
            setSelected([React.Children.count(children) - 1]);
            break;
          default:
        }
      }
    }),
    [selected, setSelected, expanded, onToggle, children, uid]
  );

  return (
    <div className={css.accordion__sub} id={id} {...rest}>
      <AccordionContext.Provider value={context}>
        {React.Children.map(children, (child, index) => {
          if (process.env.NODE_ENV === 'development') {
            if (child === null) return;
            if (typeof child !== 'object') {
              console.warn(
                `Only AccordionSection and null are allowed as a child of Accordion. Found primitive value: ${child}`
              );
              return;
            }
            if (typeof child.type === 'string') {
              console.warn(
                `Only AccordionSection and null are allowed as a child of Accordion. Found ${
                  child.type
                }`
              );
              return;
            }
            if (child.props.index !== undefined) {
              console.warn(
                'Don\'t provide index param in AccordionSection it is used for internal purposes'
              );
            }
          } else if (!child || !child.props) return child;
          return React.cloneElement(child, {
            ...child.props,
            index
          });
        })}
      </AccordionContext.Provider>
    </div>
  );
};

Accordion.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.bool),
  onToggle: PropTypes.func
};

Accordion.defaultProps = {
  expanded: null
};
