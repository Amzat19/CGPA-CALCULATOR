export const Row = ({ row, handleChange }) => {
    return (
        row.map((data, index) => {
            const { courseName, courseScore, courseUnits } = data;
                return (
                <tr key={index}>
                    <td>
                        <div className='field'>
                            <p className='control has-icons-right'>
                                <input className='input'
                                    type="text"
                                    name="courseName"
                                    value={courseName}
                                    onChange={(e) => handleChange(index, e)} />
                                <span className="icon is-small is-right">
                                    <i className="fa fa-pencil" aria-hidden="false"></i>
                                </span>
                            </p>
                        </div>
                    </td>
                    <td>
                        <div className='field'>
                            <p className='control has-icons-right'>
                                <input className='input'
                                    type="number"
                                    name="courseScore"
                                    value={courseScore}
                                    onChange={(e) => handleChange(index, e)} />
                                <span className="icon is-small is-right">
                                    <i className="fa fa-pencil" aria-hidden="false"></i>
                                </span>
                            </p>
                        </div>
                    </td>
                    <td>
                        <div className='field'>
                            <p className='control has-icons-right'>
                                <input className='input'
                                    type="number"
                                    name="courseUnits"
                                    value={courseUnits}
                                    onChange={(e) => handleChange(index, e)} />
                                <span className="icon is-small is-right">
                                    <i className="fa fa-pencil" aria-hidden="false"></i>
                                </span>
                            </p>
                        </div>
                    </td>
                </tr>
            )
        })
    );
    
};