import { FC, useEffect, useState } from "react";

import { Products } from "../../components/Products/Products";
import { Spinner } from "../../components/Spinner/Spinner";

import { IProduct, ProductId } from "../../types/product.interface";

import { fetchProducts } from "../../api";

import styles from "./styles.module.scss";

interface IProps {}

export const Home: FC<IProps> = (props) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [selectedIds, setSelectedIds] = useState<ProductId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = (await fetchProducts()) as IProduct[];
      setData(data);
    };

    fetchData()
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const handleProductSelect = (id: ProductId) => {
    if (selectedIds.includes(id)) {
      const ids = selectedIds.filter((v) => v !== id);
      return setSelectedIds(ids);
    }

    setSelectedIds((prev) => [...prev, id]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.title}>Ты сегодня покормил кота?</h1>

            {isLoading ? (
              <div className={styles.spinnerContainer}>
                <Spinner />
              </div>
            ) : (
              <Products
                selectedIds={selectedIds}
                data={data}
                onProductSelect={handleProductSelect}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
