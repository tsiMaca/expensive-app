import { Routes, Route } from 'react-router-dom';
import ExpensesDashboardPage from '../components/Dashboard/ExpensesDashboardPage';
import AddExpensePage from '../components/AddExpense/AddExpensePage';
import EditExpensePage from '../components/EditExpense/EditExpensePage';
import HelpPage from '../components/Help/HelpPage';
import NotFoundPage from '../components/NotFound/NotFoundPage';

function RoutesApp() {
  return (
        <Routes>
          <Route exact path="/" element={<ExpensesDashboardPage/>} /> 
          <Route path ="/create" element={<AddExpensePage/>} />
          <Route path ="/edit/:id" element ={<EditExpensePage/>} />
          <Route path="/help" element ={<HelpPage/>} />
          <Route path="*" element ={<NotFoundPage/>}/>
        </Routes>
    
  );
}

export default RoutesApp;