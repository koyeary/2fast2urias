import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStats } from '../../actions/profile';
import { Form } from 'react-bootstrap';

const Stats = ({ addStats, history }) => {
  const [formData, setFormData] = useState({
    mood: '',
    energy: '',
    hoursSlept: '',
    interruptedSleep: '',
    socializing: '',
    creativity: '',
    meditation: '',
    sexualActivity: '',
    menstruating: '',
    meals: '',
    physicalActivity: '',
    stressOrAnxiety: '',
    conflict: '',
    irritability: '',
    substances: '',
    notes: ''
  });

  const {
    mood,
    energy,
    hoursSlept,
    interruptedSleep,
    socializing,
    creativity,
    meditation,
    sexualActivity,
    menstruating,
    meals,
    physicalActivity,
    stressOrAnxiety,
    conflict,
    irritability,
    substances,
    notes
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Mood</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any school or bootcamp that you
        have attended
      </p>
      <small>* = required field</small>
      <Form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addStats(formData, history);
        }}
      >
        <Form.Group>
          <input
            type="text"
            placeholder="* Mood"
            name="mood"
            value={mood}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="* energy"
            name="energy"
            value={energy}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="How long did you sleep last night?"
            name="hoursSlept"
            value={hoursSlept}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="Was your sleep interrupted?"
            name="interruptedSleep"
            value={interruptedSleep}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="Did you socialize?"
            name="socializing"
            value={socializing}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="Meals"
            name="meals"
            value={meals}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="Were you phsycially active?"
            name="physicalActivity"
            value={physicalActivity}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="Did you feel stress or anxiety?"
            name="stressOrAnxiety"
            value={stressOrAnxiety}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <input
            type="text"
            placeholder="Did you feel irritable?"
            name="irritability"
            value={irritability}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type="checkbox"
              name="creativity"
              checked={creativity}
              value={creativity}
              onChange={() => setFormData({ ...formData, creativity: !creativity })}
            />{' '}
            Creativity
          </p>
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type="checkbox"
              name="meditation"
              checked={meditation}
              value={meditation}
              onChange={() => setFormData({ ...formData, meditation: !meditation })}
            />{' '}
            Meditation
          </p>
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type="checkbox"
              name="sexualActivity"
              checked={sexualActivity}
              value={sexualActivity}
              onChange={() => setFormData({ ...formData, sexualActivity: !sexualActivity })}
            />{' '}
            Sexual Activity
          </p>
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type="checkbox"
              name="menstruating"
              checked={menstruating}
              value={menstruating}
              onChange={() => setFormData({ ...formData, menstruating: !menstruating })}
            />{' '}
            Menstruating
          </p>
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type="checkbox"
              name="conflict"
              checked={conflict}
              value={conflict}
              onChange={() => setFormData({ ...formData, conflict: !conflict })}
            />{' '}
            Conflict
          </p>
        </Form.Group>
        <Form.Group>
          <p>
            <input
              type="checkbox"
              name="substances"
              checked={substances}
              value={substances}
              onChange={() => setFormData({ ...formData, substances: !substances })}
            />{' '}
            Substances
          </p>
        </Form.Group>


        <Form.Group>
          <textarea
            name="notes"
            cols="30"
            rows="5"
            placeholder="Any notes"
            value={notes}
            onChange={onChange}
          />
        </Form.Group>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </Form>
    </Fragment>
  );
};

Stats.propTypes = {
  addStats: PropTypes.func.isRequired
};

export default connect(null, { addStats })(Stats);