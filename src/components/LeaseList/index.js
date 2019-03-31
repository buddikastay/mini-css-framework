import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeaseList extends Component {

    constructor() {
        super();
        this.state = {
            leases: [],
        }
    }

    fetchLeaseDetails() {
        fetch(this.props.source)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    leases: data,
                })
            )
    }

    componentDidMount() {
        this.fetchLeaseDetails();
    }

    render() {
        const { leases } = this.state;
        return (
                <table style={{marginBottom: 20}}>
                    <thead>
                        <tr>
                            <th style={{padding: '10px 20px', textAlign: 'left', border: '1px solid #e0e0e0'}}>Lease ID</th>
                            <th style={{padding: '10px 20px', textAlign: 'left', border: '1px solid #e0e0e0'}}>Tenant Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        leases.map(lease => {
                            const { id, tenant } = lease;
                            return (
                                    <tr key={id}>
                                        <td style={{padding: '10px 20px', textAlign: 'left', border: '1px solid #e0e0e0'}}>{id}</td>
                                        <td style={{padding: '10px 20px', textAlign: 'left', border: '1px solid #e0e0e0'}}>{tenant}</td>
                                    </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
        );
    }
}

LeaseList.propTypes = {
    source: PropTypes.string
};

export default LeaseList;