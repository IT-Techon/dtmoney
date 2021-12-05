import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable() {
    useEffect(() =>{
        api('/transactions')
        .then(reponse => console.log(reponse.data)
        )
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-1.000</td>
                        <td>Casa</td>
                        <td>17/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}