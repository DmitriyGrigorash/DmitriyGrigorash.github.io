import React, {Component} from 'react';
import { RaisedButton } from 'material-ui';
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';


class UsersList extends Component {
    constructor () {
        super();

        this.rowClassName = this.rowClassName.bind(this);
    }

    rowClassName({index}) {
        if (index < 0) {
            return "Table__head";
        } else {
            return index % 2 === 0 ? "Table__row-even" : "Table__row-odd";
        }
    }

    render () {
        const { users, addUsers } = this.props;
        return (
            <section className="users">
                <RaisedButton
                    label="AddUsers"
                    onClick={addUsers}
                    primary={true}
                />
                <div className="users__table">
                    <AutoSizer disableHeight>
                        {({width}) => (
                            <Table
                                ref="Table"
                                className="Table"
                                headerHeight={21}
                                height={301}
                                overscanRowCount={8}
                                rowClassName={this.rowClassName}
                                rowCount={users.length}
                                rowGetter={({ index }) => users[index]}
                                rowHeight={31}
                                width={width}
                            >
                                <Column
                                    label='Name'
                                    dataKey='username'
                                    width={300}
                                />
                                <Column
                                    width={300}
                                    label='Country'
                                    dataKey='country'
                                />
                                <Column
                                    width={300}
                                    label='Gender'
                                    dataKey='gender'
                                />
                                <Column
                                    width={300}
                                    label='Age'
                                    dataKey='age'
                                />
                            </Table>
                        )}
                    </AutoSizer>
                </div>
            </section>
        )
    }

}

export default UsersList;
