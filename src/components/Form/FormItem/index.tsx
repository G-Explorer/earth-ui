import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import invariant from 'invariant';
import Icon from '../../Icon';
import './index.less';

class FormItem extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
        };
    }

    getChildContext() {
        return {
            formItem: this,
        };
    }

    componentWillReceiveProps() {
        const value = this.context.form.getItemValue(this);
        if (this.value !== value) {
            this.validate(value);
            this.value = value;
        }
    }

    componentWillMount() {
        this.context.form.addItem(this);
    }

    componentWillUnmount() {
        this.context.form.removeItem(this);
    }

    /**
     * @public
     * @name this.refs.formItem.validate
     * @param  {*} value 待验证字段的数据
     * @return {boolean} 成功/失败
     * @description 单个字段验证
     */
    validate(value) {
        const rules = this.context.form.props.rules;
        const rule = rules && rules[this.props.name];
        let isValid = true;
        if (rule) {
            const error = rule(value);
            if (error && typeof error === 'string') {
                isValid = false;
            }
            this.setState({ error });
        }
        return isValid;
    }

    render() {
        const { error } = this.state;
        const { children, className, name, multiple, required, help, label, ...other } = this.props;

        if (multiple) {
            invariant(
                Array.isArray(this.context.form.state.data[name]),
                `The value type of 'FormItem' which you set 'multiple' should be 'Array', check the 'Form data.${name}'.`
            );
        }

        const labelWidth = this.context.form.props.labelWidth;

        const Help = help && (
            <div className={`${prefixCls}-form__item-tip`}>
                <Icon type="question-circle" />
                {help}
            </div>
        );

        const Error = error && (
            <div className={`${prefixCls}-form__item-tip`}>
                <Icon type="info-circle" />
                {error}
            </div>
        );

        const classNames = cx(
            `${prefixCls}-form__item`,
            {
                [`${prefixCls}-form__item_error`]: error,
            },
            className
        );

        return (
            <div className={classNames} {...other}>
                {label && (
                    <div
                        className={cx(`${prefixCls}-form__item-label`, {
                            [`${prefixCls}-form__item-label_required`]: required,
                        })}
                        style={{ width: `${labelWidth}px` }}
                    >
                        {label}
                    </div>
                )}
                <div className={`${prefixCls}-form__item-content`}>
                    {children}
                    {Error || Help}
                </div>
            </div>
        );
    }
}

FormItem.contextTypes = {
    form: PropTypes.object,
};

// For FormInput, FormSelect...
FormItem.childContextTypes = {
    formItem: PropTypes.instanceOf(FormItem),
};

FormItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    // 表单数据 key，与 data、rules 对应
    name: PropTypes.string.isRequired,

    // label 显示内容
    label: PropTypes.string,

    // 是否必填，label 显示上的区别
    required: PropTypes.bool,

    // 提示信息
    help: PropTypes.string,

    // 是否多条，用于一个 name 对应多个 FormItem 场景，即 name 属性对应的字段要求数组格式
    multiple: PropTypes.bool,
};

export default FormItem;
