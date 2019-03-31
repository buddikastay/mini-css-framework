import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() { return (
        <button
            role='button'
            className={cn(
                'btn',
                'btn--'+this.props.size,
                'btn--'+this.props.color,
                {'btn--disabled':this.props.isDisabled},
                {'btn--hover':this.props.isHovered}
            )}
            onClick={this.props.onClick}
        >
            {this.props.children}
        </button>
    );
    }
}

Button.propTypes = {
    size: PropTypes.oneOf([
        'small',
        'large'
    ]),
    color: PropTypes.oneOf([
        'blue',
        'orange'
    ]),
    isDisabled: PropTypes.bool,
    isHovered: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    size: 'small',
    color: 'orange',
    isDisabled: false,
    isHovered: false,
};
export default Button;