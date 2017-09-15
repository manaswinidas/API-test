const expect = require('chai').expect;
const user = require('../../controllers/users.js');
describe('Test login controller',() =>{
    describe('Test login',() =>{
      it('rejects unknown users with error',() =>{
        let result= user.check('unknown','dummy');
        expect(result.error).is.true;
        expect(result.message).to.equal('User not Found');
      });
      it('rejects unknown passwords',() =>{
        let result=user.check('megha','tuchup');
        expect(result.error).is.true;
        expect(result.message).to.equal('Password Incorrect');
      });
      it('returns data for correct login',() =>{
        let result=user.check('amitosh','Mankada');
        expect(result).does.not.have.property('error');
        expect(result).has.property('user');
      });
    });
  });
