import { Routes, Route } from 'react-router-dom';
import ExpensesDashboardPage from '../components/Dashboard/ExpensesDashboardPage';
import AddExpensePage from '../components/AddExpense/AddExpensePage';
import EditExpensePage from '../components/EditExpense/EditExpensePage';
import NotFoundPage from '../components/NotFound/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

function RoutesApp() {
 
  return (
    <div>
        <Routes>
        <Route element={<PublicLayout />}>
          <Route exact path="/" element={<LoginPage/>} />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route path ="/dashboard" element={<ExpensesDashboardPage/>} /> 
            <Route path ="/create" element={<AddExpensePage/>} />
            <Route path ="/edit/:id" element ={<EditExpensePage/>} />
          </Route>
          <Route path="*" element ={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default RoutesApp;