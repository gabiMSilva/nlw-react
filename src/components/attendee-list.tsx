import * as React from 'react';
import { Search } from 'lucide-react';

function AttendeeList() {
    return (
        <div>
            <div className='flex gap-3 items-center'>
                <h1 className='text-2xl font-bold'>Participantes</h1>
                <div className='px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-3'>
                    <Search className='size-4 text-emerald-300' />
                    <input className='bg-transparent flex-1 outline-none' placeholder='Buscar participante' />
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox"/></th>
                        <th>Códigos</th>
                        <th>Participantes</th>
                        <th>Data de instacrição</th>
                        <th>Data do checkin</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>12383</td>
                        <td>
                            <div>
                                <span>Diogo Shell</span>
                                <span>diogo@gmail.com</span>
                            </div>
                        </td>
                        <td>7 dias atrás</td>
                        <td>3 dias atrás</td>
                        <td></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            Mostrando 10 de 28 itens
                        </td>
                        <td colSpan={3}>
                            Página 1 de 23
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export { AttendeeList };