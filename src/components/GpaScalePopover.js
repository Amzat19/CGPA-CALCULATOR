import { Popover } from 'react-bootstrap';

export const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Gpa Scales</Popover.Header>
    <Popover.Body className="d-flex">
      <div className="border-end">
        <h5>4 point scale</h5>
        <p>70-100 = 4 points</p>
        <p>60 - 69 = 3 points</p>
        <p>50 - 59 = 2 points</p>
        <p>40 - 49 = 1 point</p>
        <p>0 - 39 = 0 point</p>
        <p />
      </div>
      <div className="border-end pl-2">
        <h5>5 point scale</h5>
        <p>70-100 = 5 points</p>
        <p>60 - 69 = 4 points</p>
        <p>50 - 59 = 3 points</p>
        <p>45 - 49 = 2 points</p>
        <p>40 - 44 = 1 point</p>
        <p>0 - 39 = 0 point</p>
        <p />
      </div>
      <div className="pl-2">
        <h5>7 point scale</h5>
        <p>70-100 = 7 points</p>
        <p>65 - 69 = 6 points</p>
        <p>60 - 64 = 5 points</p>
        <p>55 - 59 = 4 points</p>
        <p>50 - 54 = 3 points</p>
        <p>45 - 49 = 2 points</p>
        <p>40 - 49 = 1 point</p>
        <p>0 - 39 = 0 point</p>
        <p />
      </div>
    </Popover.Body>
  </Popover>
);
