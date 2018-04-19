import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { SK, Mesgs } from 'sk-js';
import AntdComp from '../AntdComp';
import { BUTTON_TYPE } from '../AntdConst';

/*eslint no-unused-vars: "off"*/

Modal.defaultProps = SK.assign({}, {
  bodyStyle: {},
  cancelText: Mesgs.get('Cancel'),
  closable: true,
  mask: true,
  maskClosable: true,
  maskStyle: {},
  okText: Mesgs.get('Ok'),
  okType: BUTTON_TYPE.Primary,
  width: 520,
  zIndex: 1000,
}, Modal.defaultProps, {});

Modal.propTypes = SK.assign({}, {
  //https://ant.design/components/modal-cn/#API
  afterClose: PropTypes.func,
  bodyStyle: PropTypes.object,
  cancelText: PropTypes.string,
  closable: PropTypes.bool,
  confirmLoading: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  getContainer: PropTypes.func,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
  maskStyle: PropTypes.object,
  okText: PropTypes.string,
  okType: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  wrapClassName: PropTypes.string,
  zIndex: PropTypes.number,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
}, Modal.propTypes, {});

export default class SKModal extends AntdComp {
  static SK_COMP_NAME = 'SKModal';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Modal.defaultProps, {
    compTag: Modal,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Modal.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKModal.SK_COMP_NAME;
    this.handleCancel = (domEvent) => {
      this.skVal(false);
    };
  }

  render() {
    const { compTag: CompTag } = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onCancel={this.handleCancel}
        visible={this.skVal()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
