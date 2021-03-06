package csst15

import csst15.conf.FieldMandatoryConf
import csst15.security.User
import grails.buildtestdata.mixin.Build
import grails.test.mixin.TestFor
import spock.lang.Specification

@TestFor(UserTagLib)
@Build([User, FieldMandatoryConf])
class UserTagLibSpec extends Specification {
    void "test userFullName tag"() {
        given:
        def firstName = "Test"
        def lastName = "Test"
        def user = User.build(firstName: firstName, lastName: lastName)
        tagLib.springSecurityService = [currentUser: user]

        expect:
        tagLib.userFullName() == firstName + " " + lastName
    }

    void "test userFullName tag with username"() {
        given:
        def username = "TestName"
        def user = User.build(username: username)
        tagLib.springSecurityService = [currentUser: user]

        expect:
        tagLib.userFullName() == username
    }

    void "test username tag"() {
        given:
        def username = "testName"
        def user = User.build(username: username)
        tagLib.springSecurityService = [currentUser: user]

        expect:
        tagLib.username() == username
    }
}
