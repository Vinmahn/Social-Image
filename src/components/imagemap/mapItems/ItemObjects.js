import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { shapes } from '../components/shapes/Shapes';

const ItemObjects = ({ onAdd, onDragStart, onDragEnd }) => {
  return (
    <div>
      <span className="section-header">Shapes</span>

      <Row gutter={8}>
        {shapes.map(({ name, item, component }) => (
          <Col key={name} span={12}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => onAdd(item, true)}
              onDragStart={e => onDragStart(e, item)}
              onDragEnd={e => onDragEnd(e, item)}
              draggable
            >
              {component()}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

ItemObjects.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
};

export default ItemObjects;
