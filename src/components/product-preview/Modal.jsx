import styles from './styles.module.sass';

import { Skeleton } from '@mui/material';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';
import InnerImageZoom from 'react-inner-image-zoom';

import ModalTemplate from '../templates/Modal';
import ProductMore from './More';
import ProductDetails from './Details';

const ProductPreviewModal = ({ isOpen, handleClose, productSlug }) => {
  const { data: product } = useSWR(
    isOpen ? `/api/products/${productSlug}` : null,
    (url) => axios.get(url).then((res) => res.data)
  );

  return (
    <ModalTemplate open={isOpen} handleClose={handleClose}>
      {!product ? (
        <Skeleton variant='rounded' width='100%' height={400} />
      ) : (
        <>
          <h1 className={styles.head}>{product.name}</h1>
          <div className={styles.body}>
            <div className={styles.left}>
              <InnerImageZoom
                src={product.image}
                zoomSrc={product.image}
                zoomType='hover'
                hideHint
              />
            </div>
            <div className={styles.right}>
              <ProductMore product={product} />
              <ProductDetails product={product} />
              <Link href={`/${product.slug}`} className={styles.toproduct}>
                ПЕРЕЙТИ К ТОВАРУ
              </Link>
            </div>
          </div>
        </>
      )}
    </ModalTemplate>
  );
};

export default ProductPreviewModal;