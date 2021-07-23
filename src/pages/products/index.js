import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FixedSizeList as List } from 'react-window';
import { FixedSizeGrid as Grid } from 'react-window';

import {
    FilterBar
} from '../../components'

const Products = () => {
    const dispatch = useDispatch();
    //dispatch({ type: "products/GET_LIST" });

    const {
        productList,
        shelfs,
        product_groups
    } = useSelector((state) => state.products);

    const columns = [
        {
            title: "Ean / Plu",
            dataIndex: "ean_plu",
            width: 148
        },
        {
            title: "Name",
            dataIndex: "name",
            width: 308
        },
        {
            title: "Producer",
            dataIndex: "producer",
            width: 206
        },
        {
            title: "Size",
            dataIndex: "wt_vol_pce",
            width: 100
        },
        {
            title: "SHELF",
            dataIndex: "shelf_id",
            render: (x) => shelfs.find(y => y.id == x).name,
            width: 200
        },
        {
            title: "PRODUCT GROUP",
            dataIndex: "product_group_id",
            render: (x) => product_groups.find(y => y.id == x).name,
            width: 200
        }
    ];

    const HeaderColumn = ({ index, style }) => (
        <div
            style={{
                ...style,
                textAlign: 'left',
                paddingLeft: '33px',
                // width: columns[index].width,
                backgroundColor: 'gery',
                fontWeight: 'bold',
                fontSize: '10px',
                textTransform: 'uppercase',
                color: '#AAAAAA',
                borderBottom: '1px solid #DDDDDD',
                display: 'flex',
                alignItems: 'center'
            }}>
            {columns[index].title}
        </div>
    );

    const Cell = ({ columnIndex, rowIndex, style }) => (
        <div style={{
            ...style,
            textAlign: 'left',
            paddingLeft: '33px',
            borderBottom: '1px solid #DDDDDD',
            display: 'flex',
            alignItems: 'center',
            // width: productList[rowIndex][columns[columnIndex].dataIndex]
        }}>
            {columns[columnIndex].render ?
                columns[columnIndex].render(productList[rowIndex][columns[columnIndex].dataIndex])
                :
                productList[rowIndex][columns[columnIndex].dataIndex]
            }
        </div>
    );

    return (
        <div>
            <FilterBar />
            <List
                height={40}
                itemCount={columns.length}
                itemSize={200}
                layout="horizontal"
                width={1400}
            >
                {HeaderColumn}
            </List>
            <Grid
                columnCount={columns.length}
                columnWidth={200}
                height={productList.length * 40 + 100}
                rowCount={productList.length}
                rowHeight={40}
                width={1400}
            >
                {Cell}
            </Grid>
        </div>
    )
}

export default Products
